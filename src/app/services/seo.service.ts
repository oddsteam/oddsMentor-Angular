import { Injectable } from '@angular/core'
import { Meta, MetaDefinition } from '@angular/platform-browser'

@Injectable({
    providedIn: 'root',
})
export class SEOService {
    constructor(private meta: Meta) {}

    updateMetaTags(metaTags: MetaDefinition[]) {
        metaTags.forEach((m) => this.meta.updateTag(m))
    }
}
