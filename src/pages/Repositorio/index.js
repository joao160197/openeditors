import React, { useState, useEffect } from "react";
import {
  Container,
  Owner,
  Loading,
  BackButtom,
  IssuesList,
  PageActions,
  FilterList,
} from "./styles";
import api from "../../services/api";
import { PiKeyReturnLight } from "react-icons/pi";

export default function Repositorio({ match }) {
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, SetFilters] = useState([
    { state: "all", label: "Todas", active: true },
    { state: "open", label: "Abertas", active: false },
    { state: "closed", label: "Fechadas", active: false },
  ]);

  const [filterindex, SetFilterindex] = useState(0);

  useEffect(() => {
    async function load() {
      const nomeRepo = decodeURIComponent(match.params.repositorio);

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: filters.find((f) => f.active).state,
            per_page: 5,
          },
        }),
      ]);

      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }

    load();
  }, [match.params.repositorio]);

  useEffect(() => {
    async function loadNextPage() {
      const nomeRepo = decodeURIComponent(match.params.repositorio);
      const response = await api.get(`/repos/${nomeRepo}/issues`, {
        params: {
          state: filters[filterindex].state,
          page,
          per_page: 5,
        },
      });

      setIssues(response.data);
    }

    loadNextPage();
  }, [filterindex, filters, match.params.repositorio, page]);

  function handlePage(action) {
    setPage(action === "back" ? page - 1 : page + 1);
  }

  function handlefilter(index) {
    SetFilterindex(index);
  }

  if (loading) {
    return (
      <Loading>
        <h1>Carregando....</h1>
      </Loading>
    );
  }

  return (
    <Container style={{ color: "black" }}>
      <BackButtom to="/">
        <PiKeyReturnLight size={40} color="black" />
      </BackButtom>
      <Owner>
        <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
        <h1>{repositorio.name}</h1>
        <p>{repositorio.description}</p>
      </Owner>

      <FilterList active={filterindex}>
        {filters.map((filter, index) => (
          <button type="button" key={filter.label} onClick={()=> handlefilter(index)}>
            {filter.label}
          </button>
        ))}
      </FilterList>

      <IssuesList>
        {issues.map((issue) => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
                {issue.labels.map((label) => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>

      <PageActions>
        <button
          type="button"
          disabled={page < 2}
          onClick={() => handlePage("back")}
        >
          Voltar
        </button>
        <button type="button" onClick={() => handlePage("next")}>
          Proximo
        </button>
      </PageActions>
    </Container>
  );
}
