/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'usuarios',
        title: 'Usuarios',
        type : 'basic',
        icon : 'heroicons_outline:user',
        link : '/usuarios'
    },
    {
        id   : 'egresados',
        title: 'Egresados',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/egresado'
    },
    {
        id   : 'gestion_cuestionarios',
        title: 'Gestionar cuestionarios',
        type : 'basic',
        icon : 'heroicons_outline:clipboard-copy',
        link : '/gestion_cuestionarios'
    },
    {
        id   : 'cuestionarios',
        title: 'Cuestionarios y Encuestas',
        type : 'basic',
        icon : 'heroicons_outline:clipboard-list',
        link : '/cuestionario'
    },
    {
        id   : 'trabajo',
        title: 'Bolsa de trabajo',
        type : 'basic',
        icon : 'heroicons_outline:briefcase',
        link : '/trabajo'
    },
    {
        id   : 'extension',
        title: 'Actividades de Extension',
        type : 'basic',
        icon : 'heroicons_outline:folder-add',
        link : '/extension'
    },
    {
        id   : 'eventos',
        title: 'Eventos',
        type : 'basic',
        icon : 'heroicons_outline:speakerphone',
        link : '/eventos'
    },
    {
        id   : 'grado',
        title: 'Actos de Grado',
        type : 'basic',
        icon : 'heroicons_outline:academic-cap',
        link : '/grado'
    },
    {
        id   : 'presentacion',
        title: 'Presentaciones Deportivas',
        type : 'basic',
        icon : 'heroicons_outline:support',
        link : '/presentacion'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
