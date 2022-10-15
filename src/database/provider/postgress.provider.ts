import { Seat } from './../../api/seat/entity/seat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auditorium } from 'src/api/auditorium/entity/auditorium.entity';
import { Movie } from 'src/api/movie/entities/movie.entity';
import { ConfigModule } from '../../config/config.module';
import { ConfigService } from '../../config/config.service';
import { print } from '../utils/log';

let PostgressDataBaseProvider;
try {
  (PostgressDataBaseProvider = TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService | any) => ({
      type: configService.PG_TYPE,
      host: configService.PG_HOST,
      port: configService.PG_PORT,
      username: configService.PG_USERNAME,
      password: configService.PG_PASSWORD,
      database: configService.PG_DATABASE,
      entities: [Movie, Auditorium, Seat],
      synchronize: true,
    }),
  })),
    print('Postgress Db Connected');
} catch (error) {
  print('Postgress Db Not Connected');
}
export default PostgressDataBaseProvider;
