/***
 * NEW GROUP FORM
 */
export const GROUP = { 

    // common fields
    grp_name: "",
    grp_teaser: "",
    grp_description: "",
    
    // dynamic fields
    grp_cohesion: 0,
    grp_branch: 0,
    grp_sub_branch:0,
    grp_isActive:false,

    // selected user as group founder
    grp_founder: null,    

    // selected users for this group    
    members: [],

    // optional fields
    grp_location: "",
    grp_company_name: "",
    grp_company_kvk: ""
    
}