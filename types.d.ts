import type { LocaleMessages } from '@aeria-ui/i18n'

type LocaleString = LocaleMessages[string]

declare global {
  type AeriaLocale = {
   all: LocaleString
    done: LocaleString
    user: LocaleString
    none: LocaleString
    no_results: LocaleString
    searching_ellipsis: LocaleString
    showing: LocaleString
    yes: LocaleString
    no: LocaleString
    of: LocaleString
    filters: LocaleString
    filter_by: LocaleString
    add_first_item: LocaleString
    change_password: LocaleString
    change_layout: LocaleString
    edit_profile: LocaleString
    action: {
      add: LocaleString
      cancel: LocaleString
      clear: LocaleString
      confirm: LocaleString
      duplicate: LocaleString
      edit: LocaleString
      filter: LocaleString
      insert: LocaleString
      remove: LocaleString
      save: LocaleString
      select: LocaleString
      view: LocaleString
      signin: LocaleString
    }
    signin: {
      no_account: LocaleString
      create_account: LocaleString
      proceed_as: LocaleString
    }
    page: LocaleString
    password_has_been_changed: LocaleString
    prompt: {
      default: LocaleString
      close_panel: LocaleString
    }
    validation_error: {
      missing: LocaleString
      extraneous: LocaleString
      unmatching: LocaleString
      extraneous_element: LocaleString
      numeric_constraint: LocaleString
    }
  }

}
