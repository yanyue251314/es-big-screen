import { defineStore } from 'pinia'

interface ScreenState {
	title: string,
	theme: 'dark' | 'light'
}

export const useScreenStore = defineStore({
	id: 'screen',
	state: (): ScreenState => {
		return {
			title: '保融销售信息看板',
			theme: 'dark'
		}
	}
})
