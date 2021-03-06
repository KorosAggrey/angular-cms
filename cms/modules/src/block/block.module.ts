import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCubes, faFolder, faCube, faFolderPlus, faPlusSquare, faBars } from '@fortawesome/free-solid-svg-icons';

import { CoreModule } from '@angular-cms/core';

import { CmsAngularSplitModule } from '../shared/libs/angular-split/module';
import { CmsBsDropdownModule } from '../shared/libs/ngx-bootstrap/bs-dropdown.module';
import { DndModule } from '../shared/drag-drop/dnd.module';
import { TreeModule } from '../shared/tree/tree.module';

import { BlockTreeComponent } from './block-tree.component';
import { BlockTreeService } from './block-tree.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        FontAwesomeModule,
        CmsAngularSplitModule.forRoot(),
        CmsBsDropdownModule.forRoot(),
        CoreModule,
        TreeModule,
        DndModule
    ],
    declarations: [
        BlockTreeComponent
    ],
    entryComponents: [
        BlockTreeComponent
    ],
    exports: [
        BlockTreeComponent
    ],
    providers: [BlockTreeService]
})
export class BlockModule {
    constructor(private library: FaIconLibrary) {
        library.addIcons(faFolder, faCubes, faCube, faFolderPlus, faPlusSquare, faBars);
    }
}
