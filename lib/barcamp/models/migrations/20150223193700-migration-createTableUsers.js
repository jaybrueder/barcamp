/*
 * BRS Migration File
 *
 * Written by Paul Rudolf Seebacher, Jörg Simon and Jürgen Brüder
 * 
 * Copyright © 2015 by the contributing authors
 *
 * This file is part of the BarCamp Registration System.
 * 
 * The BarCamp Registration System is free software: you can redistribute
 * it and/or modify it under the terms of the GNU Affero General Public
 * License as published by the Free Software Foundation, either version
 * 3 of the License, or (at your option) any later version.
 *
 * The BarCamp Registration System is distributed in the hope that it
 * will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with the BarCamp Registration System.
 * If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

module.exports = {
  up: function (migration, DataTypes, done) {
    // logic for transforming into the new state

    migration.createTable("Users",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        username: {
          type: DataTypes.STRING(255),
          unique: true
        },
        firstName: DataTypes.STRING(255),
        lastName: DataTypes.STRING(255),
        password: DataTypes.STRING(255),
        email: {
          type: DataTypes.STRING(255),
          unique: true,
          allowNull: true
        },
        token: DataTypes.STRING(255),
        preferredCamp: DataTypes.STRING(255),
        shirtSize: DataTypes.ENUM('S', 'M', 'L', 'XL', 'none'),
        note: DataTypes.TEXT,
        children: DataTypes.BOOLEAN,
        newcomer: DataTypes.BOOLEAN,
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false
        }
      }
      ).complete(done);
  }
};
