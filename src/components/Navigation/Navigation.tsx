import '../../shared/components/FormElements/Button.css';

export const Navigation = () => {
  const title: string = 'Diary Journal';

  return (
    <>
      <section className='grid-item __item-1 header'>
        <header className='title'>
          <p>{title}</p>
        </header>
      </section>
    </>
  );
};
