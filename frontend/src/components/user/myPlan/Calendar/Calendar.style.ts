import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${(prop) => prop.theme.main};
  border-radius: 30px;
  padding: 40px;
  position: relative;
  overflow: hidden;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  color: ${(prop) => prop.theme.text};
  padding: 10px;
  padding-left: 20px;
`;

export const ShowCalendarDate = styled.div`
  display: flex;
`;

export const MonthPicker = styled.div`
  display: flex;
  align-items: center;
`;

export const MonthChangeBtn = styled.span`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 0 3px;
  cursor: pointer;
  &:hover {
    background-color: ${(prop) => prop.theme.caleandar_hover};
  }
`;

export const CalendarBody = styled.div`
  padding: 10px;
`;

export const CalendarWeekDay = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: 600;
  height: 50px;
`;

export const CalendarWeekDayItems = styled.div`
  display: grid;
  place-items: center;
  color: ${(prop) => prop.theme.second};
`;

export const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  color: var(--color-txt);
`;

export const CalendarDaysItems = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  &:hover {
    border-style: solid;
    border-width: 3px;
    border-color: ${(prop) => prop.theme.border};
    cursor: pointer;
  }
  &:nth-child(7n-6) {
    color: red;
  }
  &:nth-child(7n) {
    color: #0d6efd;
  }
`;

export const EmptyBox = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const ShowDate = styled.h1`
  margin-top: 60px;
  font-size: 34px;
  font-weight: 550;
  white-space: nowrap;
`;
