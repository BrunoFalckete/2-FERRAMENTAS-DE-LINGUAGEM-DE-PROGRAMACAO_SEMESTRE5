/**
 * Description placeholder
 * @date 16/10/2023 - 21:40:30
 *
 * @export
 * @class User
 * @typedef {User}
 */
export default class User {
  /**
   * Description placeholder
   * @date 16/10/2023 - 21:40:30
   *
   * @type {string}
   */
  id: string;
  //role: Role;
  /**
   * Description placeholder
   * @date 16/10/2023 - 21:40:30
   *
   * @type {string}
   */
  email: string;
  /**
   * Description placeholder
   * @date 16/10/2023 - 21:40:30
   *
   * @type {?string}
   */
  address?: string;
  /**
   * Description placeholder
   * @date 16/10/2023 - 21:40:30
   *
   * @type {(string | Date)}
   */
  createdAt: string | Date;
  /**
   * Description placeholder
   * @date 16/10/2023 - 21:40:30
   *
   * @type {(string | Date)}
   */
  updatedAt: string | Date;
}
