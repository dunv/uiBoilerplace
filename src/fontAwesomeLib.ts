import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt, faBars, faSpinner, faTrash, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

export const initFontawesome = () => {
    library.add(fas, faSignOutAlt);
    library.add(fas, faBars);
    library.add(fas, faSpinner);
    library.add(fas, faTrash);
    library.add(fas, faAngleDoubleLeft);
};
