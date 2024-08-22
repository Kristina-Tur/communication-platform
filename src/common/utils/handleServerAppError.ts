import { Dispatch } from "redux"
import {BaseResponse} from "../../features/auth/types";
import {setAppErrorAC, setAppLoaderAC} from "../../app/app-reducer";

/**
 * Обрабатывает ошибки серверного приложения, отправляя соответствующие действия для обновления состояния приложения.
 *
 * @template T Тип данных, содержащихся в ответе.
 * @param {BaseResponse<T>} data Ответ от сервера, который включает сообщения об ошибках.
 * @param {Dispatch} dispatch Функция Redux dispatch, используемая для отправки действий.
 * @param {boolean} [isShowGlobalError=true] Флаг, указывающий, следует ли показывать глобальное сообщение об ошибке.
 * @returns фунция ничего не возвращает
 */

export const handleServerAppError = <T>(
  data: BaseResponse<T>,
  dispatch: Dispatch
) => {

    if (data.messages.length) {
      dispatch(setAppErrorAC( data.messages[0] ))
    } else {
      dispatch(setAppErrorAC("some error occurred" ))
    }

  dispatch(setAppLoaderAC(false))
}
