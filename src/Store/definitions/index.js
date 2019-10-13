/***
 * Network
 */
export const SET_NETWORK_STATUS = 'set_network_status';

/***
 * Application management pulses
 */
export const SET_NETWORK_PULSE = 'set_network_pulse';
export const SET_CENTRAL_PULSE = 'set_central_pulse';
export const SET_SERVICE_PULSE = 'set_service_pulse';

/***
 * Set display settings
 */
export const SET_DISPLAY_SETTINGS='set_display_settings';

/**
 * Client Device definitions
 */
export const CLIENT_TOKEN = 'client_token';
export const CLIENT_HEADERS_ANALYSIS = 'client_headers_analysis';
export const CLIENT_DEVICE_SCREEN = 'client_device_screen';

/**
 * Custimazation Markup Definitions
 */
export const TOGGLE_COLLAPSED_NAV = 'toggle_collapse_menu';
export const DRAWER_TYPE = 'drawer_type';
export const FIXED_DRAWER = 'fixed_drawer';
export const COLLAPSED_DRAWER = 'collapsible';
export const MINI_DRAWER = 'mini_drawer';
export const THEME_COLOR = 'theme_color';
export const DARK_THEME = 'dark_theme';
export const WINDOW_WIDTH = 'window-width';
export const SWITCH_LANGUAGE = 'switch-language';
export const CHANGE_DIRECTION = 'change-direction';

export const CHANGE_NAVIGATION_STYLE = 'change-navigation-style';
export const HORIZONTAL_NAVIGATION = 'horizontal_navigation';
export const VERTICAL_NAVIGATION = 'vertical_navigation';

export const HORIZONTAL_MENU_POSITION = 'horizontal_menu_position';
export const ABOVE_THE_HEADER = 'above_the_header';
export const INSIDE_THE_HEADER = 'inside_the_header';
export const BELOW_THE_HEADER = 'below_the_header';

/**
 * Auth definitions
 */
export const AUTH_ANIMATE = 'auth_animate';
export const SIGNUP_USER = 'signup_user';
export const SIGNUP_USER_SUCCESS = 'signup_user_success';
export const SIGNUP_USER_VERIFICATION = 'signup_user_verification';
export const SIGNIN_USER = 'signin_user';
export const SIGNIN_SET_USER_TOKEN = 'signin_set_user_token';
export const SIGNOUT_USER = 'signout_user';
export const USER_SET_ISLOGGEDIN_STATUS = 'user_set_isloggedin_status';
export const SIGNOUT_USER_SUCCESS = 'signout_user_success';
export const INIT_URL = 'init_url';
export const SHOW_AUTH_MESSAGE = 'show_auth_message';
export const AUTH_ROUTE_USER = 'auth_route_user';

/**
 * User CRUD definitions
 */
export const USER_SET_OBJECT = 'user_set_object';

/**
 * Other User Actions
 */
export const USER_RELATIONS = 'user_relations';
export const USER_CONTEXT_MENU_OPTION = 'user_context_menu_option';
export const USERS_CONTEXT_MENU = 'users_context_menu';
export const USER_CONTEXT_MENU_CLOSE= 'user_context_menu_close';
export const USERS_CONTEXT_MENU_OPTION = 'users_context_menu_option';
export const USER_CONTEXT_MENU = 'user_trigger_context_menu';

/**
 * Group CRUD definitions
 */
export const CREATE_NEW_GROUP = 'create_new_group';

/**
 * DIALOG definitions => seperate reducer
 */
export const DIALOG_NEW_GROUP = 'dialog_new_group';
export const DIALOG_GROUP_ADMIN_NEW_GROUP = 'dialog_group_admin_new_group';
export const DIALOG_NEW_USER = 'dialog_new_user';
export const DIALOG_NEW_PROSPECT = 'dialog_new_prospect';
export const DIALOG_NEW_GROUP_PROSPECT = 'dialog_new_group_prospect';
export const DIALOG_NEW_GROUP_FOUNDER_PROSPECT = 'dialog_new_group_founder_prospect';
export const DIALOG_NEW_GROUP_OWNER_PROSPECT = 'dialog_new_group_owner_prospect';
export const DIALOG_PAGINATION_GROUP_FILTER = 'dialog_pagination_group_filter';
export const DIALOG_DEFAULT_SNACKBAR = 'dialog_default_snackbar';

// chat module
export const ON_SHOW_LOADER = 'on_show_loader';
export const ON_HIDE_LOADER = 'on_hide_loader';

// messages
export const SHOW_MESSAGE = 'show_message';
export const HIDE_MESSAGE = 'hide_message';

export const SET_ERROR_MESSAGE = 'set_error_message';
export const SET_ERROR_CODE = 'set_error_code';
export const SET_SUCCESS_MESSAGE = 'set_succes_message';
export const SET_WARNING_MESSAGE = 'set_warning_message';
export const SET_INFO_MESSAGE = 'set_info_message';


/***
 * Data Actions: Display
 */
export const DATA_PAGINATION_DISPLAY_ANIMATE = 'data_pagination_display_animate';

/***
 * Data Actions: Groups
 */
export const DATA_SHOW_ANIMATION = 'data_show_animation';
export const DATA_BLUR_CURRENT_FORM = 'data_blur_current_form';
export const DATA_CURRENT_FORM_RESET = 'data_current_form_reset'
export const DATA_UPDATE_CURRENT_FORM = 'data_update_current_form';
export const DATA_FORMS_BRANCHES = 'data_forms_branches';
export const DATA_FORMS_SUBBRANCHES = 'data_forms_subbranches';
export const DATA_FORMS_BANKPROVIDERS = 'data_forms_bankproviders';
export const DATA_FORMS_PRODUCTS = 'data_forms_products';
export const DATA_GROUPS_PAGINATE_ITEMS = 'data_groups_paginate_items';
export const DATA_GROUPS_PAGINATION_OBJECT = 'data_groups_pagination_object';
export const DATA_GROUPS_STATS_GENDER_RANKING = 'data_groups_stats_gender_ranking';
export const DATA_GROUPS_STATS_COUNT_RANKING = 'data_groups_stats_count_ranking';
export const DATA_GROUPS_STATS_LATEST_GROUPS = 'data_groups_stats_latest_groups';
export const DATA_GROUP_INFO = 'data_group_info';
export const DATA_GROUPADMIN_GROUPS = 'data_groupadmin_info';
export const DATA_SINGLE_GROUP_VIEW = 'data_single_group_view';
export const DATA_SINGLE_GROUP_PAGINATE_ITEMS = 'data_single_group_pagination';
export const DATA_RESET_GROUP_PAGINATE_ITEMS = 'data__reset_single_group_pagination';
export const DATA_SINGLE_GROUP_PAGINATION_OBJECT = 'data_single_group_pagination_object';
export const DATA_RESET_SINGLE_GROUP_VIEW = 'data_reset_single_group_view';

/***
 * Data Actions: Users
 */
export const DATA_USER_PROFILE = 'data_user_profile';
export const DATA_USERS_PAGINATE_ITEMS = 'data_users_paginate_items';
export const DATA_USERS_PAGINATION_OBJECT = 'data_users_pagination_object';
export const DATA_SET_SEARCH_TERM = 'data_set_search_term';
export const DATA_SEARCH_RESET_TERM=  'data_search_reset_term';
export const DATA_SEARCH_USERS = 'data_search_users';
export const DATA_SEARCH_USERS_EXTENDED = 'data_search_users_extended';
export const DATA_SEARCH_GROUPS = 'data_search_groups';
export const DATA_SEARCH_CONTACTS = 'data_search_contacts';
export const DATA_USERS_STATS_COUNTS = 'data_users_stats_counts';
export const DATA_USERS_STATS_LATEST = 'data_users_stats_latest';

/***
 * Data Actions: Prospects
 */
export const DATA_PROSPECTS_PAGINATE_ITEMS = 'data_prospects_paginate_items';
export const DATA_PROSPECTS_PAGINATION_OBJECT = 'data_prospects_paginate_object';
export const DATA_GROUP_OWNER_PROSPECTS_PAGINATE_ITEMS = 'data_group_owner_prospects_paginate_items';
export const DATA_GROUP_OWNER_PROSPECTS_PAGINATION_OBJECT = 'data_group_owner_prospects_pagination_object';
export const DATA_PROSPECTS_STATS = 'data_prospects_stats';

export const DATA_TASKS_PAGINATE_ITEMS = 'data_tasks_paginate_items';
export const DATA_TASKS_PAGINATION_OBJECT = 'data_tasks_pagination_object';

export const DATA_CONTACTS_PAGINATE_ITEMS = 'data_contacts_paginate_items';
export const DATA_CONTACTS_PAGINATION_OBJECT = 'data_contacts_pagination_object';

export const DATA_MESSAGES_PAGINATE_ITEMS = 'data_messages_paginate_items';
export const DATA_MESSAGES_PAGINATION_OBJECT = 'data_messages_pagination_object';

/***
 * Data Actions: Pagination Context Menus
 */
export const DATA_CONTEXT_MENU = 'data_context_menu';
export const DATA_CONTEXT_MENU_OPTION = 'data_context_menu_option';
export const DATA_PAGINATION_CONTEXT_MENU_OPTION = 'data_context_menu_option';

/***
 * Data actions: User Relationships:
 * owned groups
 * group memberships
 * foudned groups
 */
export const DATA_USER_GROUP_MEMBERSHIPS = 'data_user_group_memberships';
export const DATA_USER_GROUP_OWNERSHIPS = 'data_user_group_ownerships';
export const DATA_USER_GROUPS_FOUNDED = 'data_user_groups_founded';

 /***
  * Data Actions Tasks
  */
 export const DATA_TASKS_SHORTLIST = 'data_tasks_shortlist';

 /***
  * CRUD User Actions
  */
export const USER_CREATE = 'user_create';
export const USER_MUTATION = 'user_mutation';

export const USER_CONTACT = 'user_contact';

/***
 * CRUD group actions
 */
export const GROUP_CREATE = 'group_create';
export const GROUP_NEW = 'group_new';
export const GROUP_ANIMATE = 'group_animate';
export const GROUP_HIDE_RESULT_NEW_FORM = 'group_hide_result_new_form'; 

/***
 * CRUD TASK actions 
 */
export const TASK_MUTATION = 'task_mutation';
export const TASK_ANIMATE = 'task_animate';

 /***
  * Group Context Menu actions
  */
export const GROUP_OWNERS_CONTEXT_MENU = 'group_owners_context_menu';
export const GROUP_OWNERS_CONTEXT_MENU_OPTION = 'group_owners_context_menu_option';

/***
 * CRUD USE ACTIONS
 */
export const USER_ANIMATE = 'user_animate';
export const USER_HIDE_LOADER = 'user_hide_loader';
export const USER_DATA = 'user_data';
export const USER_FORM_PROCESSED = 'user_form_processed';
export const USER_NEW = 'user_new';
export const USER_FORM_ERROR_CODE='user_error_code';
export const USER_RESET_FORM = 'user_reset_form';


/***
 * CRUD APPLICANT ACTIONS
 */
export const APPLICANT_ANIMATE = 'applicant_animate';
export const APPLICANT_HIDE_LOADER = 'applicant_hide_loader';
export const APPLICANT_FORM_PROCESSED = 'applicant_form_processed';
export const APPLICANT_IS_REGISTERED = 'applicant_is_registered';
export const APPLICANT_IS_VERIFIED='applicant_public_is_verified';
export const APPLICANT_ERROR_CODE='applicant_error_code';
export const APPLICANT_FORM_ERROR_CODE='applicant_form_error_code';
export const APPLICANT_DATA='applicant_data';
export const APPLICANT_RESET_FORM = 'applicant_reset_form';


 /***
  * CRUD PROSPECT  actions
  */
export const PROSPECT_ANIMATE = 'prospect_animate';
export const PROSPECT_HIDE_LOADER = 'prospect_hide_loader';
export const PROSPECT_FORM_PROCESSED = 'prospect_form_processed';
export const PROSPECT_PUBLIC_IS_VERIFIED='prospect_public_is_verified';
export const PROSPECT_ERROR_CODE='prospect_error_code';
export const PROSPECT_FORM_ERROR_CODE='prospect_form_error_code';
export const PROSPECT_DATA='prospect_data';
export const PROSPECT_RESET_FORM = 'prospect_reset_form';
export const PROSPECT_NEW = 'prospect_new';
export const PROSPECT_HIDE_RESULT_NEW_FORM = 'prospect_hide_result_new_form';

export const PROSPECT_FOUNDER_NEW='prospect_founder_new';
 

/***
 * CRUD GROUP OWNER PROSPECT ACTIONS
 */
export const GROUP_OWNER_PROSPECT_ANIMATE = 'prospect_animate';
export const GROUP_OWNER_PROSPECT_HIDE_LOADER = 'prospect_hide_loader';
export const GROUP_OWNER_PROSPECT_NEW = 'group_owner_prospect_new';
export const GROUP_OWNER_PROSPECT_IS_VERIFIED='group_owner_prospect_is_verified';
export const GROUP_OWNER_PROSPECT_ERROR_CODE='group_owner_prospect_error_code';
export const GROUP_OWNER_PROSPECT_DATA='group_owner_prospect_data';
export const GROUP_OWNER_PROSPECT_RESET_FORM = 'group_owner_prospect_reset_form';
export const GROUP_OWNER_PROSPECT_FORM_ERROR_CODE='group_prospect_form_error_code';
export const GROUP_PROSPECT_FOUNDER_NEW='group_prospect_founder_new';
export const GROUP_OWNER_PROSPECT_FORM_PROCESSED = 'group_owner_prospect_form_processed';

/***
 * CRUD GROUP PROSPECT ACTIONS
 */
export const GROUP_PROSPECT_NEW = 'group_prospect_new';
export const GROUP_PROSPECT_IS_VERIFIED='group_prospect_is_verified';
export const GROUP_PROSPECT_ERROR_CODE='group_prospect_error_code';
export const GROUP_PROSPECT_DATA='group_prospect_data';
export const GROUP_PROSPECT_RESET_FORM = 'group_prospect_reset_form';
export const GROUP_PROSPECT_FORM_ERROR_CODE='group_prospect_form_error_code';




/***
 * FORMS ACTIONS
 */
export const FORMS_SET_NEW_VALUES = 'forms_set_new_values';
export const FORMS_SHOW_ANIMATION = 'forms_show_animations';

/***
 * REPORTS ACTIONS
 */
 export const REPORT_SINGLE_ERROR = 'report_single_error';
 export const SET_GLOBAL_REPORT_MESSAGE = 'set_global_report_message';







