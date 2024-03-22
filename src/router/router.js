import {createRouter,createWebHistory} from '../../node_modules/vue-router/index.js';
import Index from '@/views/index';
import Second from '@/views/second';
import Three from '@/views/three'
<<<<<<< HEAD
import Large_screen from '@/views/large_screen'
=======
>>>>>>> 4fd9da1087ba67900f9da46041a5f97225da31bd
// 路由配置
const routes = [{
		path: '/',
		component: Large_screen
	},
	{
		path: '/large_screen',
		component: Large_screen
	},
	{
		path: '/index',
		component: Index
	},
	{
		path: '/second',
		component: Second
	},
	{
		path: '/three',
		component: Three
	}
];

// 创建router实例
const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;