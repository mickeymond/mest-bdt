import { ApiProperty } from '@nestjs/swagger';
import { IsDateString } from 'class-validator';

export class CreateCohortDto {
  @ApiProperty({
    description: 'The name of the cohort.',
    example: 'Cohort 1',
  })
  name: string;

  @ApiProperty({
    description: 'The description of the cohort.',
    example: 'The first cohort of the program.',
  })
  description: string;

  @ApiProperty()
  image: string;

  @IsDateString()
  @ApiProperty()
  startDate: Date;

  @IsDateString()
  @ApiProperty()
  endDate: Date;
}
