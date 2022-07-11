import { Injectable } from '@angular/core'
import { Meta, MetaDefinition, Title } from '@angular/platform-browser'

@Injectable({
    providedIn: 'root',
})
export class SEOService {
    constructor(private meta: Meta, private title: Title) {}

    updateTitle(title: string) {
        this.title.setTitle(title)
    }

    updateMetaTags(metaTags: MetaDefinition[]) {
        metaTags.forEach((m) => this.meta.updateTag(m))
    }
}
