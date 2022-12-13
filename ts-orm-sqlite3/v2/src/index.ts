import { connect, connection } from './infrastructure/db/database';
import Sample from './infrastructure/db/entities/Sample';

(async () => {
  await connect();
  const sampleRepository = connection!.getRepository(Sample);

  console.log('# INSERT START #');
  await sampleRepository.save({ type: 'success', content: 'foo' });
  console.log('# INSERT DONE #');

  console.log('# SELECT START #');
  const records = await sampleRepository.find({ type: 'success' });
  records.forEach((record) => console.log(record));
  console.log('# SELECT DONE #');
})();
