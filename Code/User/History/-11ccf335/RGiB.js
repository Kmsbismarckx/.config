import { PortalNodeContext, ZIndexContext } from 'react-tooltpz';

import Alerts from '../../Alerts';
import Authentication from './Authentication';
import { DndProvider } from 'react-dnd';
import DocumentTitle from '../../DocumentTitle';
import DraggableLayer from '../../DraggableLayer';
import Favicon from '../../Favicon';
import { HTML5Backend } from 'react-dnd-html5-backend';
import InternetConnection from '../../InternetConnection';
import IntlProvider from '../../Intl/IntlProvider';
import MetaViewport from '../../MetaViewport';
import Modals from '../../../modals';
import PageReloader from '../../PageReloader';
import PageVisibility from '../../PageVisibility';
import { Z_INDEX_FOR_DEFAULT_TOOLTIP } from '../../../constants/Common';

const CrmRoute = ({ children }) => (
    <PortalNodeContext.Provider value={document.getElementById('root') || document.body}>
        <ZIndexContext.Provider value={Z_INDEX_FOR_DEFAULT_TOOLTIP}>
            <DndProvider backend={HTML5Backend}>
                <IntlProvider>
                    <Favicon />
                    <MetaViewport />
                    <DocumentTitle />
                    <InternetConnection />
                    <PageVisibility />
                    <PageReloader />
                    <Modals />
                    <Alerts />
                    <DraggableLayer />
                    <Authentication>{!!children && children}</Authentication>
                </IntlProvider>
            </DndProvider>
        </ZIndexContext.Provider>
    </PortalNodeContext.Provider>
);

export default CrmRoute;
