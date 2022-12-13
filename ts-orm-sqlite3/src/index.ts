import DataSource from './infrastructure/db/data-source';
import Sample from './infrastructure/db/entities/Sample';

(async () => {
  const sampleRepository = DataSource.getRepository(Sample);

  await DataSource.initialize();

  console.log('# INSERT START #');
  await sampleRepository.save({ type: 'success', content: 'foo' });
  console.log('# INSERT DONE #');

  console.log('# SELECT START #');
  const records = await sampleRepository.find();
  records.forEach((record) => console.log(record));
  console.log('# SELECT DONE #');
})();
