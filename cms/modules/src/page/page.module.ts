import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFile, faFolder, faSitemap } from '@fortawesome/free-solid-svg-icons';

import { CoreModule } from '@angular-cms/core';

import { ContentModule } from '../content/content.module';
import { DndModule } from '../shared/drag-drop';
import { TreeModule } from '../shared/tree';

import { PageTreeReadonlyComponent } from './page-tree-readonly.component';
import { PageTreeComponent } from './page-tree.component';
import { PageTreeService } from './page-tree.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        FontAwesomeModule,

        CoreModule,
        ContentModule,
        TreeModule,
        DndModule
    ],
    declarations: [
        PageTreeComponent,
        PageTreeReadonlyComponent
    ],
    entryComponents: [
        PageTreeComponent,
        PageTreeReadonlyComponent
    ],
    exports: [
        PageTreeComponent,
        PageTreeReadonlyComponent
    ],
    providers: [PageTreeService]
})
export class PageModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faFolder, faSitemap, faFile);
    }
}
