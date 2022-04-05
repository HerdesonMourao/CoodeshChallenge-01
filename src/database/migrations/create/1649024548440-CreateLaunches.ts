import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLaunches1649024548440 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "launches",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "id_articles",
            type: "int",
            isNullable: false,
            default: false,
          },
          {
            name: "provider",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "datetime",
            isNullable: false,
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "datetime",
            isNullable: false,
            default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
            {
              name: 'FK_Articles_Launches',
              referencedTableName: 'articles',
              referencedColumnNames: ['id'],
              columnNames: ['id_articles'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
          ],
  
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("launches");
  }
}
