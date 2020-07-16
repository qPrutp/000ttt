import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import BtnCheckCircle from './ui/btn-check-circle';
import BtnXCircle from './ui/btn-x-circle';
import FormInWorkSearch from './ui/form-in-work-search';
import './App.scss';

type ExitType = () => void;

interface Props {
  title: string
  exit: ExitType
  titleBtnBack: string
  titleBtnExit: string
  emptyFilialList: string
  titleAppoint: string
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

      <main className="ml-md-3 mr-md-3 content">
        <section className="shadow-sm mb-3 border appoint">
          <h2 className="appoint-title">
            {props.titleAppoint}
            <span className="ml-2 text-success">
              <svg width=".5em" height="1em" viewBox="0 0 16 16" className="bi bi-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8"/>
              </svg>
            </span>
          </h2>

          <div className="appoint-content">
            {[1,2,3].map((item, i) =>{
                  return (
                    <div key={i} className="container-fluid appoint-item">
                      <div className="row">
                        <div className="col-12 col-md-4">Котлова Яна Сергіївна(Торговый отдел)</div>
                        <div className="col-12 col-md-4">Вывези в торговый зал 1 РК Консервацыя, масло</div>
                        <div className="col-12 col-md-3">Консервация, масло</div>
                        <div className="col-12 col-md-1">
                          <div className="btn-group" role="group">
                            <BtnCheckCircle class={"btn btn-sm btn-success middle"} />
                            <BtnXCircle class={"btn btn-sm btn-danger middle"} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
            )}
          </div>
        </section>

        <section className="shadow-sm border in-work">
          <h2 className="in-work-title">
            {props.titleInWork}
            <span className="ml-2 text-warning">
              <svg width=".5em" height="1em" viewBox="0 0 16 16" className="bi bi-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8"/>
              </svg>
            </span>
          </h2>

          <FormInWorkSearch />

          <div className="in-work-content">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Название филиала</th>
                  <th>ФИО</th>
                  <th>Текст задачи</th>
                  <th>Локация</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4,5,6,7,1,2,3,4,5,6].map((item, i) =>{
                  return (
                    <tr key={i}>
                      <td>Львів Сільпо Південний</td>
                      <td>Котлова Яна Сергіївна(Торговый отдел)</td>
                      <td>Вывези в торговый зал 1 РК Консервацыя, масло</td>
                      <td>Консервация, масло</td>
                      <td>
                        <div className="btn-group" role="group">
                          <BtnCheckCircle class={"btn btn-sm btn-success middle"} />
                          <BtnXCircle class={"btn btn-sm btn-danger middle"} />
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
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
  titleAppoint: "Назначить задачу:",
  titleInWork: "Задачи в работе:"
}

export default App;
