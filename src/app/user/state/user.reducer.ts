import * as userActions from './user.actions';
import { User } from '../models/user.model';
import * as fromRoot from '../../state/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

export interface UserState extends EntityState<User> {
  selectedUserId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  users: UserState;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const defaultUser: UserState = {
  ids: [],
  entities: {},
  selectedUserId: null,
  loading: false,
  loaded: false,
  error: '',

}

export const initialState = userAdapter.getInitialState(defaultUser)


export function userReducer(state = initialState, action: userActions.Actions): UserState {
  switch (action.type) {
    case userActions.UserActionTypes.LOAD_USERS_SUCCESS: {
      return userAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case userActions.UserActionTypes.LOAD_USERS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload,
      }
    }
    case userActions.UserActionTypes.LOAD_USER_SUCCESS: {
      return userAdapter.addOne(action.payload, {
        ...state,
        selectedUserId: action.payload.id
      });
    }
    case userActions.UserActionTypes.LOAD_USER_FAIL: {
      return {
        ...state,
        error: action.payload,
      }
    }
    case userActions.UserActionTypes.CREATE_USER_SUCCESS: {
      return userAdapter.addOne(action.payload, state);
    }
    case userActions.UserActionTypes.CREATE_USER_FAIL: {
      return {
        ...state,
        error: action.payload,
      }
    }
    case userActions.UserActionTypes.UPDATE_USER_SUCCESS: {
      return userAdapter.updateOne(action.payload, state);
    }
    case userActions.UserActionTypes.UPDATE_USER_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case userActions.UserActionTypes.DELETE_USER_SUCCESS: {
      return userAdapter.removeOne(action.payload, state);
    }
    case userActions.UserActionTypes.DELETE_USER_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case userActions.UserActionTypes.ACTIVATE_USER_SUCCESS: {
      return userAdapter.updateOne(action.payload, state);
    }
    case userActions.UserActionTypes.ACTIVATE_USER_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
    /* case userActions.UserActionTypes.LOAD_ADMINS_SUCCESS: {
      return userAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case userActions.UserActionTypes.LOAD_ADMINS_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case userActions.UserActionTypes.LOAD_TEACHERS_SUCCESS: {
      return userAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case userActions.UserActionTypes.LOAD_TEACHERS_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case userActions.UserActionTypes.LOAD_STUDENTS_SUCCESS: {
      return userAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case userActions.UserActionTypes.LOAD_STUDENTS_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case userActions.UserActionTypes.LOAD_PARENTS_SUCCESS: {
      return userAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case userActions.UserActionTypes.LOAD_PARENTS_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    } */
  }

}

/* Selectors */
const getUserFeatureState = createFeatureSelector<UserState>('users');
export const getUsers = createSelector(getUserFeatureState, userAdapter.getSelectors().selectAll);
export const getUsersLoading = createSelector(getUserFeatureState, (state: UserState) => state.loading);
export const getUsersLoaded = createSelector(getUserFeatureState, (state: UserState) => state.loaded);
export const getError = createSelector(getUserFeatureState, (state: UserState) => state.error);
export const getCurrentUserId = createSelector(getUserFeatureState, (state: UserState) => state.selectedUserId);
export const getCurrentUser = createSelector(
  getUserFeatureState,
  getCurrentUserId,
  state => state.entities[state.selectedUserId]
);
