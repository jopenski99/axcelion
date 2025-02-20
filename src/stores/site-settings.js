import { defineStore } from 'pinia';
import site_settings from 'src/api/spine/site_settings';

export const useSettingStore = defineStore('Settings', {
  state: () => ({
    setting: {}
  }),
  getters: {
    getSettingState: (state) => state.setting,
  },
  actions: {
    async getSettings() {
        await site_settings.getSiteSettings().then(response => {
            this.setting = response
            console.log (response)
        })
    },
    },
    persist: {
        enabled: true,
        strategies: [
          {
            key: 'settings',
            storage: localStorage,
          },
        ],
      },
});
