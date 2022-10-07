package com.cdac.service;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Doctorinfo;
import com.cdac.entity.Hospital;
import com.cdac.repository.AdminRepository;
import com.cdac.repository.DoctorinfoRepository;
import com.cdac.repository.HospitalRepository;
import com.cdac.repository.UserRepository;

@Service
@Transactional
public class HospitalServiceImpl implements HospitalServiceIntf {

	@Autowired
	HospitalRepository hospitalRepository;
	
	@Autowired
	AdminRepository adminRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	DoctorinfoRepository doctorinfoRepository;
	@Autowired
	EncryptService encryptService;
	
	@Override
	public Hospital savehospital(Hospital hosp) {
		String sp = hosp.getPassword();
		try {
		String encryptPassword = encryptService.toHexString(encryptService.getSHA(sp));
		hosp.setPassword(encryptPassword);
		}catch(NoSuchAlgorithmException e) {
			 System.out.println("Exception thrown for incorrect algorithm: " + e);
		}
		return hospitalRepository.save(hosp);
	}
	
	@Override
	public List<Hospital> getAllHospital() {
		return hospitalRepository.findAll();
	}
	
	@Override
	public Hospital getHospitalById(int id) {
		try {
			
		return hospitalRepository.findById(id).get();
		}catch(NoSuchElementException e) {
			return new Hospital();
		}
	}
	
	@Override
	public Doctorinfo savedoctorinfo(Doctorinfo d, int id) {
		Hospital hos = hospitalRepository.findById(id).get();
		
		Doctorinfo info = new Doctorinfo(d.getName(), d.getEmail(), d.getQualification(), d.getSpecialization(),hos);
		
		return doctorinfoRepository.save(info);
	}
	
	@Override
	public void updateBed(Hospital hosp, int id) {
//		System.out.println(hospitalRepository.findBedByHospitalId(id).toString());
		hospitalRepository.updatebed(id, hosp.getVentilator(), hosp.getOxygen(), hosp.getNormal());
		
	}

	@Override
	public void updateBlood(Hospital h, int id) {
		hospitalRepository.updateblood(id, h.getA_pos(), h.getA_neg(), h.getB_pos(), h.getB_neg(),
				h.getAb_pos(), h.getAb_neg(), h.getO_pos(), h.getO_neg());
	}

	@Override
	public void updateOxygen(Hospital hosp,int id) {
		hospitalRepository.updateoxygen(id, hosp.getOxygenavailable());
	}
	
	@Override
	public Hospital getBedByHospitalname(String hosname) {
		return hospitalRepository.findByHospitalname(hosname);
	}

	@Override
	public Hospital getBloodByHospitalname(String hosname) {
		return hospitalRepository.findByHospitalname(hosname);
	}

	@Override
	public Hospital getOxygenByHospitalname(String hosname) {
		return hospitalRepository.findByHospitalname(hosname);
	}
	

}
