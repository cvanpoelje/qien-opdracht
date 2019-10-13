/***
 * Group Reducer Init State
 * used as preloadstate in Store/configuration.js
 */
export const GROUP_REDUCER_INIT_STATE = {

	animate: false,
	
	results: {
		new: {}
	},
	
	groupOwnersContextMenu: {
		optionID: null,
		menuState: false,
		anchorEl: undefined,
		context: null
	},

	/***
	 * Group Controller Actions
	 */
	create: {
		animate:false,
		status: false,
		data: null
	},

	mutation: {
		animate: false,
		status: false,
		data: null
	},

	delete: {
		animate: false,
		status: false,
		data: null
	},

	data: [

	    {
	      id: 1,
	      grp_name: 'Bosbouw en natuurbeheer',
	      grp_teaser: 'Necessitatibus enim non quis minus et omnis aut.',
	      cohesion: 3,
	      grp_founder_id: 5,
	      grp_parent_branch: 1,
	      grp_branch: 1,
	      grp_company_name: '',
	      grp_company_kvk: '',
	      grp_location: '',
	      created_at: '2019-09-25 15:48:49',
	      branche_name: 'Agrosector',
	      sub_branche_name: 'Bosbouw en natuurbeheer',
	      foundedAt: '25-09-2019',
	      owners: [
	        {
	          id: 3,
	          firstName: 'Kees',
	          lastName: 'Druif',
	          fullName: 'Kees Druif',
	          identifier: '54df58f0-ec59-11e9-b100-819c42abcb72',
	          role: 10
	        }
	      ],
	      founder: {
	        id: 1,
	        firstName: 'Kees',
	        lastName: 'Kok',
	        fullName: 'Kees Kok',
	        identifier: '54b20740-ec59-11e9-87bb-15136eb4139a',
	        role: 1,
	        created_at: '2019-10-11 21:00:02'
	      }
	    },
	    {
	      id: 4,
	      grp_name: 'Bouw en infrastructuur',
	      grp_teaser: 'Pariatur ipsam temporibus amet ratione expedita quaerat eaque a.',
	      cohesion: 3,
	      grp_founder_id: 6,
	      grp_parent_branch: 2,
	      grp_branch: 5,
	      grp_company_name: '',
	      grp_company_kvk: '',
	      grp_location: '',
	      created_at: '2019-09-25 15:48:50',
	      branche_name: 'Bouwnijverheid',
	      sub_branche_name: 'Bouw en infrastructuur',
	      foundedAt: '25-09-2019',
	      owners: [
	        {
	          id: 9,
	          firstName: 'Piet',
	          lastName: 'Kooijman',
	          fullName: 'Piet Kooijman',
	          identifier: '553ff390-ec59-11e9-a6bd-ad92defe9313',
	          role: 10
	        }
	      ],
	      founder: {
	        id: 4,
	       	  firstName: 'Kees',
	          lastName: 'Druif',
	          fullName: 'Kees Druif',
	        identifier: '54f1af60-ec59-11e9-a076-ed00f764502d',
	        role: 20,
	        created_at: '2019-10-11 21:00:03'
	      }
	    },
	    {
	      id: 10,
	      grp_name: 'Cultuur',
	      grp_teaser: 'Non exercitationem quasi sit et placeat ducimus.',
	      cohesion: 3,
	      grp_founder_id: 6,
	      grp_parent_branch: 8,
	      grp_branch: 41,
	      grp_company_name: '',
	      grp_company_kvk: '',
	      grp_location: '',
	      created_at: '2019-09-25 15:48:51',
	      branche_name: 'Kunst, cultuur, amusement en media',
	      sub_branche_name: 'Cultuur',
	      foundedAt: '25-09-2019',
	      owners: [
	        {
	          id: 3,
	          firstName: 'Kees',
	          lastName: 'Druif',
	          fullName: 'Kees Druif',
	          identifier: '54df58f0-ec59-11e9-b100-819c42abcb72',
	          role: 10
	        }
	      ],
	      founder: {
	        id: 10,
	        firstName: 'Piet',
	        lastName: 'Kooijman',
	        fullName: 'Piet Kooijman',
	        identifier: '554e7650-ec59-11e9-bee3-29233f91e8aa',
	        role: 20,
	        created_at: '2019-10-11 21:00:03'
	      }
	    },
	    {
	      id: 8,
	      grp_name: 'Horeca en catering',
	      grp_teaser: 'Accusantium id rem ipsum odit deleniti sed maiores quia dolores adipisci sit.',
	      cohesion: 3,
	      grp_founder_id: 5,
	      grp_parent_branch: 5,
	      grp_branch: 25,
	      grp_company_name: '',
	      grp_company_kvk: '',
	      grp_location: '',
	      created_at: '2019-09-25 15:48:51',
	      branche_name: 'Horeca, catering, sport en recreatie',
	      sub_branche_name: 'Horeca en catering',
	      foundedAt: '25-09-2019',
	      owners: [
	        {
	          id: 8,
	          firstName: 'Oscar',
	          lastName: 'Mercks',
	          fullName: 'Oscar Merks',
	          identifier: '552f3f40-ec59-11e9-a33c-7192d319cbf5',
	          role: 20
	        }
	      ],
	      founder: {
	        id: 8,
	      	firstName: 'Oscar',
	        lastName: 'Mercks',
	        fullName: 'Oscar Merks',
	        identifier: '552f3f40-ec59-11e9-a33c-7192d319cbf5',
	        role: 20,
	        created_at: '2019-10-11 21:00:03'
	      }
	    },
	    {
	      id: 6,
	      grp_name: 'ICT',
	      grp_teaser: 'Omnis id aliquid quidem et nobis non vel.',
	      cohesion: 3,
	      grp_founder_id: 6,
	      grp_parent_branch: 4,
	      grp_branch: 19,
	      grp_company_name: '',
	      grp_company_kvk: '',
	      grp_location: '',
	      created_at: '2019-09-25 15:48:51',
	      branche_name: 'Groothandel',
	      sub_branche_name: 'ICT',
	      foundedAt: '25-09-2019',
	      owners: [
	        {
	          id: 4,
	          firstName: 'Kees',
	          lastName: 'Druif',
	          fullName: 'Kees Druif',
	          identifier: '54f1af60-ec59-11e9-a076-ed00f764502d',
	          role: 20
	        }
	      ],
	      founder: {
	        id: 6,
	        firstName: 'Albert',
	        lastName: 'Einstein',
	        fullName: 'Albert Einstein',
	        identifier: '55102a20-ec59-11e9-adac-b3c28b8bc27b',
	        role: 20,
	        created_at: '2019-10-11 21:00:03'
	      }
	    },
	    {
	      id: 2,
	      grp_name: 'Land-en tuinbouw',
	      grp_teaser: 'Quis dignissimos voluptate accusamus voluptas inventore aliquid incidunt minus.',
	      cohesion: 3,
	      grp_founder_id: 6,
	      grp_parent_branch: 1,
	      grp_branch: 2,
	      grp_company_name: '',
	      grp_company_kvk: '',
	      grp_location: '',
	      created_at: '2019-09-25 15:48:49',
	      branche_name: 'Agrosector',
	      sub_branche_name: 'Land-en tuinbouw',
	      foundedAt: '25-09-2019',
	      owners: [
	        {
	          id: 5,
	          firstName: 'Albert',
	        lastName: 'Einstein',
	        fullName: 'Albert Einstein',
	          identifier: '550074f0-ec59-11e9-b789-054971a6b14a',
	          role: 10
	        }
	      ],
	      founder: {
	        id: 2,
	        firstName: 'Albert',
	        lastName: 'Einstein',
	        fullName: 'Albert Einstein',
	        identifier: '54cd74e0-ec59-11e9-9974-e7943f61c4bb',
	        role: 15,
	        created_at: '2019-10-11 21:00:03'
	      }
	    }
	]
};