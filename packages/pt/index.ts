import { defineLocale } from '@aeria-ui/i18n'

export const pt = defineLocale({
 all: "todos",
  done: "feito",
  user: [
    "usuário",
    "usuários"
  ],
  none: "nenhum",
  no_results: "sem resultados",
  searching_ellipsis: "pesquisando...",
  showing: "mostrando",
  yes: "sim",
  no: "não",
  of: "de",
  filters: "filtros",
  filter_by: "filtrar por",
  add_first_item: "adicionar primeiro item",
  change_password: "mudar senha",
  change_layout: "alternar layout",
  edit_profile: "editar perfil",
  action: {
    add: "adicionar",
    cancel: "cancelar",
    clear: "limpar",
    confirm: "confirmar",
    duplicate: "duplicar",
    edit: "editar",
    filter: "filtrar",
    insert: "inserir",
    remove: "remover",
    save: "salvar",
    select: "selecionar",
    view: "visualizar",
    signin: undefined
  },
  signin: {
    no_account: "Ainda não possui uma conta?",
    create_account: "Registre-se",
    proceed_as: "Continuar como"
  },
  page: [
    "página",
    "páginas"
  ],
  password_has_been_changed: "A senha foi atualizada com sucesso.",
  prompt: {
    default: "Tem certeza de que deseja fazer isso?",
    close_panel: "Deseja mesmo fechar esse painel?\nInformações que não foram salvas podem ser perdidas.\n"
  },
  validation_error: {
    missing: "campo obrigatório",
    extraneous: "campo excedente",
    unmatching: "tipo incorreto para o campo",
    extraneous_element: "lista contém elementos excedentes",
    numeric_constraint: "limitação numérica"
  }

} satisfies AeriaLocale)

