import {createRouter,createWebHistory} from '../../node_modules/vue-router/index.js';
import Index from '@/views/index';
import Second from '@/views/second';
import Three from '@/views/three'
import Large_screen from '@/views/large_screen'
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