import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AppStore from '~/store/app.store'

let appStore: AppStore

const initialiseStores = (store: Store<any>): void => {
  appStore = getModule(AppStore, store)
}

export { initialiseStores, appStore }
