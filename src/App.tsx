import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import './App.scss';

type ExitType = () => void;

interface Props {
  title: string
  exit: ExitType
  titleBtnBack: string
  titleBtnExit: string
  emptyFilialList: string
  titleAppointTask: string
  titleInWork: string
}

function App(props: Props) {
  return (
    <Fragment>
      <header className="container-fluid shadow-sm mb-3 border header">
        <div className="row">
          <div className="col col-md-3 middle">
            <h1 className="title">{props.title}</h1>
          </div>

          <div className="col-6 col-md-3 order-md-1 justify-content-end middle">
            <Link
              className="btn btn-link d-md-none"
              to="#"
              title={props.titleBtnBack}
            >
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </Link>
            <button
              className="btn btn-sm btn-primary"
              onClick={props.exit}
              title={props.titleBtnExit}
            >Выход</button>
          </div>

          <div className="col-12 col-md-6 middle">
            <fieldset className="border pl-2 pr-2">
              <legend className="m-0 w-auto">Филиалы</legend>
              <span className="font-weight-bold">{props.emptyFilialList}</span>
            </fieldset>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="shadow-sm mb-3 border appoint">
          <h2>
            {props.titleAppointTask}
            <span className="ml-2 text-success">
              <svg width=".5em" height="1em" viewBox="0 0 16 16" className="bi bi-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8"/>
              </svg>
            </span>
          </h2>

        </section>

        <section className="shadow-sm border in-work">
          <h2>
            {props.titleInWork}
            <span className="ml-2 text-warning">
              <svg width=".5em" height="1em" viewBox="0 0 16 16" className="bi bi-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8"/>
              </svg>
            </span>
          </h2>
        </section>
      </main>
    </Fragment>
  );
}

App.defaultProps = {
  title: "Диспетчерская",
  exit: (): void => { console.warn('realise action: exit')},
  titleBtnBack: "вернутся к модулям",
  titleBtnExit: "к авторизации",
  emptyFilialList: "Данных нет!",
  titleAppointTask: "Назначить задачу:",
  titleInWork: "Задачи в работе:"
}

export default App;
