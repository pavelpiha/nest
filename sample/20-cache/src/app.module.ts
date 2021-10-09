import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpCacheInterceptor } from './common/http-cache.interceptor';

@Module({
  imports: [
    CacheModule.register({
      ttl: 120,
    }),
  ],
  controllers: [AppController],
  providers: [HttpCacheInterceptor],
})
export class AppModule {}
