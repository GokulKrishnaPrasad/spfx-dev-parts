import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './JsDisplayListGokoolWebPart.module.scss';

export interface IJsDisplayListGokoolWebPartProps {
}

export default class JsDisplayListGokoolWebPart extends BaseClientSideWebPart<IJsDisplayListGokoolWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.jsDisplayListGokool }"></div>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
