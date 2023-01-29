import { Knex } from 'knex'
export class LoginModel {

  constructor () { }

  async login(db: Knex, username: any, password: any) {
    return db
      .from('users as u')
      .innerJoin('hospitals as h', 'h.hospcode', 'u.hospcode')
      .innerJoin('zones as z', 'z.code', 'h.zone_code')
      .select('u.id', 'u.password', 'z.ingress_zone', 'h.hospcode')
      .where('u.username', username)
      .where('u.password', password)
      .where('u.enabled', true)
      .first()
  }

}
