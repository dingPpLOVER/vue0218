import {createRouter,createWebHistory} from '../../node_modules/vue-router/index.js';
import Index from '@/views/index';
import Second from '@/views/second';

// 路由配置
const routes = [{
		path: '/',
		component: Index
	},
	{
		path: '/index',
		component: Index
	},
	{
		path: '/second',
		component: Second
	},
];

// 创建router实例
const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;