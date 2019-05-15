class Model {
  constructor(knex, name, tableName, selectableProps, timeout) {
    this.knex = knex || {};
    this.name = name || '';
    this.tableName = tableName || '';
    this.selectableProps = selectableProps || [];
    this.timeout = timeout || 1000;
  }

  /**
   * Create item in DB.
   *
   * @param {*} props
   * @returns
   */
  create(props) {
    delete props.id; // not allowed to set `id`
    return this.knex.insert(props)
      .returning(this.selectableProps)
      .into(this.tableName)
      .timeout(this.timeout, {cancle: true});
  };

  /**
   * Find a list of item DB.
   *
   * @returns
   */
  findAll() {
    return this.knex.select(this.selectableProps)
      .from(this.tableName)
      .limit(10) // defalut limit should be changed.
      .timeout(this.timeout, {cancle: true});
  };

  /**
   * Find the items based on filters from DB.
   *
   * @param {*} filters
   * @returns
   */
  find(filters) {
    // return this.knex.select(this.selectableProps)
    //   .from(this.tableName)
    //   .where(filters)
    //   .timeout(this.timeout, {cancle: true});
    return [];
  };

  /**
   * Same as `find` but only returns the first match if >1 are found.
   * @see find
   * @param {*} filters
   * @returns
   */
  findOne(filters) {
    // return this.knex.find(filters)
    //   .then((results) => {
    //     if (!Array.isArray(users)) return results;
    //     return results[0];
    //   });
    return [];
  };

  /**
   * Find an item by id from DB.
   *
   * @param {*} id
   * @returns
   */
  findById(id) {
    return this.knex.select(this.selectableProps)
      .from(this.tableName)
      .where({ id })
      .timeout(this.timeout, {cancle: true});
  };

  /**
   * Update and item by id in DB.
   *
   * @param {*} id
   * @param {*} props
   * @returns
   */
  update(id, props) {
    delete props.id; // not allowed to set `id`
    return this.knex.update(props)
      .from(this.tableName)
      .where({ id })
      .returning(this.selectableProps)
      .timeout(this.timeout, {cancle: true});
  };

  /**
   * Delete an item by id in DB.
   *
   * @param {*} id
   * @returns
   */
  destroy(id) {
    return this.knex.del()
      .from(this.tableName)
      .where({ id })
      .timeout(this.timeout, {cancle: true});
  };

};

exports.Model = Model;
