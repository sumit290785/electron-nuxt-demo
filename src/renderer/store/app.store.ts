import { Module, VuexModule } from 'nuxt-property-decorator'

@Module({
  name: 'appStore',
  namespaced: true,
  stateFactory: true
})
export default class AppStore extends VuexModule {

}
