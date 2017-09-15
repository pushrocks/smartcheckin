import { expect, tap } from 'tapbundle'
import * as smartcheckin from '../ts/index'

tap.test('first test', async () => {
  console.log(smartcheckin.standardExport)
})

tap.start()
