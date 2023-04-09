import React from 'react'
import s from './users.module.css'
import axios from "axios";

class User extends React.Component{

   page = 2;
    //функция отработает перед хтмл отрисовкой
    componentDidMount() {
        this.props.setUsers([
            {
                id: 1,
                photoUrl: 'https://bipbap.ru/wp-content/uploads/2019/05/567a4cc9870f8d8e3d03362732760e2c.jpg',
                followed: false,
                name: 'Azhar',
                status: 'My status',
                location: {city: 'Astana', country: 'Kazakhstan'}
            },
            {
                id: 2,
                photoUrl: 'https://bipbap.ru/wp-content/uploads/2019/07/3ef1f84df73631aa62103e862464a008.jpg',
                followed: true,
                name: 'Akbar',
                status: 'My status',
                location: {city: 'Astana', country: 'Kazakhstan'}
            },
            {
                id: 3,
                photoUrl: 'https://www.ejin.ru/wp-content/uploads/2020/03/unnamed-1.jpg',
                followed: false,
                name: 'Makhabbat',
                status: 'My status',
                location: {city: 'Astana', country: 'Kazakhstan'}
            },
            {
                id: 4,
                photoUrl: 'https://www.ejin.ru/wp-content/uploads/2020/03/unnamed-1.jpg',
                followed: false,
                name: 'Makhabbat',
                status: 'My status',
                location: {city: 'Astana', country: 'Kazakhstan'}
            },
            {
                id: 5,
                photoUrl: 'https://www.ejin.ru/wp-content/uploads/2020/03/unnamed-1.jpg',
                followed: false,
                name: 'Makhabbat',
                status: 'My status',
                location: {city: 'Astana', country: 'Kazakhstan'}
            },
            {
                id: 6,
                photoUrl: 'https://www.ejin.ru/wp-content/uploads/2020/03/unnamed-1.jpg',
                followed: false,
                name: 'Makhabbat',
                status: 'My status',
                location: {city: 'Astana', country: 'Kazakhstan'}
            }
            //axios
        ])


        // axios.get('*')
        //     .then(res=>{
        //         this.props.setUsers(res.data.items);
        //         this.props.setTotalUsersCount(res.data.totalCount);
        //     })
    }

    onPageChange=(p)=>{
        this.props.setCurrentPage(p);
        //запрос на сервак
    }

    render(){

        let pages = Math.ceil(this.props.totalCount / this.props.pageSize);
        let arr = [];
        for(let i = 1;i<=pages;i++){
            arr.push(i);
        }

    return (
      <>
          <div>
              {arr.map((p)=>{
                 return <span className={this.props.currentPage===p  && s.selectPage}
                 onClick={()=>{this.onPageChange(p)}}>{p}</span>
              })}
          </div>
        {this.props.users.map(u => <div key={u.id}>
          <span>
            <div><img src={u.photoUrl} className={s.avatar} alt="" /></div>
            <div>

              {
                (u.followed) ?
                  <button onClick={() => { this.props.follow(u.id) }}>Follow</button> :
                  <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>)
        }
      </>
    )
  }
}
export default User;