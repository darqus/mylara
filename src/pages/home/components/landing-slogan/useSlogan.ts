import { useDataFetching } from 'src/composables/useDataFetching'
import { getSlogan } from 'src/services/slogan.service'

export const useSlogan = () => {
  const {
    data: slogan,
    loading,
    error,
    refresh,
  } = useDataFetching<string, { title: string }>(getSlogan, '', 'title')

  return {
    slogan,
    loading,
    error,
    refresh,
  }
}
