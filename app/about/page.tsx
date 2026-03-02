import Button from "@/app/components/Button/Button";

const AboutPage = () => {

  console.log('Серверный компонент создан')

  const lastUpdated = new Date().toISOString();

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold mb-3">Страница about</h1>
      <p>Эта страница полностью отображается на сервере. Для этого компонента JavaScript не отправляется в браузер</p>
      <p>Эта страница полностью отображается на сервере. Для этого компонента JavaScript не отправляется в браузер</p>
      <p className="mb-5">Последнее обновление: {lastUpdated}</p>
      <Button />
    </div>
  );
};

export default AboutPage;