package com.cdac.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.entity.Hospital;
import com.cdac.entity.Request;
import com.cdac.entity.User;
@Repository
public interface RequestRepository extends JpaRepository<Request, Integer> {

List<Request> findByHospital(Hospital hospital);
	
	List<Request> findByUser(User user);
	
	@Query("select r from Request r where r.status='pending' and r.hospital=:hospital")
	List<Request> getPendingRequest(Hospital hospital);
	
	@Modifying
	@Query("update Request r set r.status=:status where r.reqid=:reqid")
	int updaterequest(int reqid,String status);
	
}
