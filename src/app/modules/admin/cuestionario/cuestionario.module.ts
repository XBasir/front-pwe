import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CuestionarioComponent } from 'app/modules/admin/cuestionario/cuestionario.component';
import { CuestionarioAddComponent } from 'app/modules/admin/cuestionario/cuestionario.component';
import { CuestionarioAnswerComponent } from 'app/modules/admin/cuestionario/cuestionario.component';
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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';


const cuestionarioRoutes: Route[] = [
    {
        path     : '',
        component: CuestionarioComponent
    },
    {
        path     : 'create',
        component: CuestionarioAddComponent
      },
      {
        path     : 'edit/:id',
        component: CuestionarioAddComponent
      },
      {
        path     : 'responder/:id',
        component: CuestionarioAnswerComponent
      },
      {
        path     : 'detail/:id',
        component: CuestionarioAddComponent
      }
];

@NgModule({
    declarations: [
        CuestionarioComponent,
        CuestionarioAddComponent,
        CuestionarioAnswerComponent
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
        MatExpansionModule,
        MatRadioModule,
        RouterModule.forChild(cuestionarioRoutes)
    ]
})
export class CuestionarioModule
{
}
