import { defineLocale } from '@aeria-ui/i18n'

export const en = defineLocale({
  all: undefined,
  done: undefined,
  user: [
    "user",
    "users"
  ],
  none: undefined,
  no_results: "no results",
  searching_ellipsis: "searching...",
  showing: undefined,
  yes: undefined,
  no: undefined,
  of: undefined,
  filters: undefined,
  filter_by: "filter by",
  add_first_item: "add the first item",
  change_password: "change password",
  change_layout: "change layout",
  edit_profile: "edit profile",
  action: {
    add: undefined,
    cancel: undefined,
    confirm: undefined,
    clear: undefined,
    duplicate: undefined,
    edit: undefined,
    filter: undefined,
    insert: undefined,
    remove: undefined,
    save: undefined,
    select: undefined,
    view: undefined,
    signin: undefined
  },
  signin: {
    no_account: "Don't have an account yet?",
    create_account: "Sign up",
    proceed_as: "Proceed as"
  },
  password_has_been_changed: "The password has been changed successfully.",
  prompt: {
    default: "Are you sure you want to do that?",
    close_panel: "Are you sure you want to close this panel?\nUnsaved information can be lost.\n"
  },
  validation_error: {
    missing: "required field",
    extraneous: "extraneous field",
    unmatching: "incorrect type for field",
    extraneous_element: "list contains an extraneous element",
    numeric_constraint: "numeric constraint"
  }
})
