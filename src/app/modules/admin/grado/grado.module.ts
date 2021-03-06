import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { GradoComponent } from 'app/modules/admin/grado/grado.component';
import { GradoAddComponent } from 'app/modules/admin/grado/grado.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';

const gradoRoutes: Route[] = [
    {
        path     : '',
        component: GradoComponent
    },
    {
      path     : 'create',
      component: GradoAddComponent
    },
    {
      path     : 'edit/:id',
      component: GradoAddComponent
    },
    {
      path     : 'detail/:id',
      component: GradoAddComponent
    }
];

@NgModule({
    declarations: [
        GradoComponent,
        GradoAddComponent,

    ],
    imports     : [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSortModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTableModule,
        MatTooltipModule,
        SharedModule,
        RouterModule.forChild(gradoRoutes)
    ]
})
export class GradoModule
{
}
