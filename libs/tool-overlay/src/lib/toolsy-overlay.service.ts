import { Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { Overlay, OverlayConfig, ScrollStrategy } from '@angular/cdk/overlay';
import { ToolsyOverlayRef } from './toolsy-overlay-ref';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ToolsyOverlayComponent } from './toolsy-overlay/toolsy-overlay.component';

export type POSITION = 'top' | 'center';

export interface IToolsyConfig {
  /** Strategy with which to position the overlay. */
  positionStrategy?: POSITION;
  /** Custom class to add to the overlay pane. */
  panelClass?: string | string[];
  /** Whether the overlay has a backdrop. */
  hasBackdrop?: boolean;
  /** Custom class to add to the backdrop */
  backdropClass?: string | string[];
  /** The width of the overlay panel. If a number is provided, pixel units are assumed. */
  width?: number | string;
  /** The height of the overlay panel. If a number is provided, pixel units are assumed. */
  height?: number | string;
  /** The min-width of the overlay panel. If a number is provided, pixel units are assumed. */
  minWidth?: number | string;
  /** The min-height of the overlay panel. If a number is provided, pixel units are assumed. */
  minHeight?: number | string;
  /** The max-width of the overlay panel. If a number is provided, pixel units are assumed. */
  maxWidth?: number | string;
  /** The max-height of the overlay panel. If a number is provided, pixel units are assumed. */
  /** The max-height of the overlay panel. If a number is provided, pixel units are assumed. */
  maxHeight?: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class ToolsyOverlayService {
  constructor(private overlay: Overlay, private injector: Injector) {
    console.log('Starting service');
  }

  forRoot() { }

  open<R = any, T = any>(
    content: string | TemplateRef<any> | Type<any>,
    data: T,
    config: IToolsyConfig
  ): ToolsyOverlayRef<R> {
    console.log(config);
    let positionStrategy;

    switch (config.positionStrategy) {
      case 'center':
        positionStrategy = this.overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically();
        break;

      case 'top':
        positionStrategy = this.overlay
          .position()
          .global()
          .right()
          .top();
    }

    const configs = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      maxHeight: config.maxHeight,
      minHeight: config.minHeight,
      minWidth: config.minWidth,
      maxWidth: config.maxWidth,
      panelClass: config.panelClass,
      backdropClass: config.backdropClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    const overlayRef = this.overlay.create(configs);

    const myOverlayRef = new ToolsyOverlayRef<R, T>(overlayRef, content, data);

    const injector = this.createInjector(myOverlayRef, this.injector);
    overlayRef.attach(new ComponentPortal(ToolsyOverlayComponent, null, injector));

    return myOverlayRef;
  }

  createInjector(ref: ToolsyOverlayRef, inj: Injector) {
    const injectorTokens = new WeakMap([[ToolsyOverlayRef, ref]]);
    return new PortalInjector(inj, injectorTokens);
  }
}
