import { Logger } from '@nestjs/common';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import { PlatformService } from '../../graphql.schema';
import { Service } from '../../platform/services/service';
import { IOrderPickUpServiceEntity } from './interfaces/order-pick-up-service.interface';
@Resolver('OrderPickUpService')
export class OrderPickUpServiceResolver {
  constructor(
    private readonly service: Service,
    private readonly logger: Logger,
  ) {
    this.logger.setContext(OrderPickUpServiceResolver.name);
  }

  @ResolveField('service')
  async orderPickUpService(
    @Parent() orderPickUpService: IOrderPickUpServiceEntity,
  ): Promise<PlatformService> {
    return await this.service.getById(orderPickUpService?.service_id);
  }
}
