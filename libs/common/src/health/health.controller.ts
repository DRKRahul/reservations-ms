import { Get, Controller } from '@nestjs/common';

@Controller('/')
export class HealthController {
  @Get('/health')
  health() {
    return true;
  }
}
