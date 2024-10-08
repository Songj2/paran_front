import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { BookResponseModel, initialBookState, LikeBookModel } from '@/app/model/group/book.model';

export const bookSlice = createSlice({
  name: 'book',
  initialState: initialBookState,
  reducers: {
    saveBooks: (state, action: PayloadAction<BookResponseModel[]>) => {
      state.books = action.payload;
    },
    saveLikedBooks: (state, action: PayloadAction<LikeBookModel[]>) => {
      state.likedBooks = action.payload;
    },
    addLikedBook: (state, action: PayloadAction<LikeBookModel>) => {
      state.likedBooks.push(action.payload);
    },
    deleteLikedBook: (state, action: PayloadAction<number>) => {
      state.likedBooks = state.likedBooks.filter(likedBook => likedBook.id !== action.payload);
    },
    saveCurrentBook: (state, action: PayloadAction<BookResponseModel | null>) => {
      state.currentBook = action.payload;
    },
    saveLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    saveError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  
  }
});

// Selector 함수들
export const getBooks = (state: RootState) => state.book.books;
export const getCurrentBook = (state: RootState) => state.book.currentBook;
export const getLikedBooks = (state: RootState) => state.book.likedBooks;
export const getIsLoading = (state: RootState) => state.book.isLoading;
export const getError = (state: RootState) => state.book.error;

export const {
  saveBooks,
  addLikedBook,
  saveCurrentBook,
  saveLikedBooks,
  deleteLikedBook,
  saveLoading,
  saveError
} = bookSlice.actions;

export default bookSlice.reducer;
function createAsyncThunk(arg0: string, arg1: ({ page, size }: { page: number; size: number; }, { dispatch }: { dispatch: any; }) => Promise<any>) {
  throw new Error('Function not implemented.');
}

function findBookList(page: number, size: number) {
  throw new Error('Function not implemented.');
}

function selectFileList(bookIds: any, arg1: string) {
  throw new Error('Function not implemented.');
}

function saveFiles(files: any): any {
  throw new Error('Function not implemented.');
}

