import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CsspruebajhSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [CsspruebajhSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CsspruebajhSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CsspruebajhSharedModule {
  static forRoot() {
    return {
      ngModule: CsspruebajhSharedModule
    };
  }
}
