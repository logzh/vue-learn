/**
 * Created by spencezhang on 2015/10/15.
 */
    
const wwq = {
    Affix: require('./components/affix'),
    Datepicker: require('./components/datepicker'),
    Tooltip: require('./components/tooltip'),
    Carousel: require('./components/carousel'),
    Tabs: require('./components/tabs'),
    Modal: require('./components/modal'),
    Dropdown: require('./components/dropdown'),
    Progress: require('./components/progress'),
    Popover: require('./components/popover'),
    Select: require('./components/select'),
    Breadcrumb: require('./components/breadcrumb'),
    Popconfirm: require('./components/popconfirm'),
    Pagination: require('./components/pagination'),
    confirm: require('./components/modal/confirm'),
    Steps: require('./components/steps'),
    InputNumber: require('./components/input-number'),
    Switch: require('./components/switch'),
    Checkbox: require('./components/checkbox'),
    Table: require('./components/table'),
    Tag: require('./components/tag'),
    Collapse: require('./components/collapse'),
    message: require('./components/message'),
    Slider: require('./components/slider'),
    EnterAnimation: require('./components/enter-animation'),
    Radio: require('./components/radio'),
    Notification: require('./components/notification'),
    Alert: require('./components/alert'),
    Validation: require('./components/validation'),
    Tree: require('./components/tree'),
    Upload: require('./components/upload'),
    Badge: require('./components/badge'),
    Menu: require('./components/menu'),
    Timeline: require('./components/timeline')
};

// deprecate wwq.confirm
wwq.confirm = require('util-deprecate')(wwq.confirm, 'wwq.confirm() is deprecated, use wwq.Modal.confirm() instead');

module.exports = wwq;

wwq.version = require('./package.json').version;
